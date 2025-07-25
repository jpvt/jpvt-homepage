import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const blogDirectory = path.join(process.cwd(), 'content/blog')

// Get all blog post files
export function getBlogPostFiles() {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }
  return fs.readdirSync(blogDirectory).filter(file => file.endsWith('.md'))
}

// Extract slug from filename (remove date prefix and .md extension)
export function getSlugFromFilename(filename) {
  // Convert "2024-07-24-welcome-to-my-blog.md" to "welcome-to-my-blog"
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix
    .replace(/\.md$/, '') // Remove .md extension
}

// Get filename from slug (need to search for the file)
export function getFilenameFromSlug(slug) {
  const files = getBlogPostFiles()
  return files.find(file => getSlugFromFilename(file) === slug)
}

// Get all blog posts with metadata (sorted by date, newest first)
export function getAllBlogPosts() {
  const files = getBlogPostFiles()
  
  const posts = files.map(filename => {
    const slug = getSlugFromFilename(filename)
    const fullPath = path.join(blogDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      filename,
      title: data.title || 'Untitled',
      date: data.date || '1970-01-01',
      description: data.description || '',
      tags: data.tags || [],
      content,
      year: new Date(data.date || '1970-01-01').getFullYear()
    }
  })
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get blog posts grouped by year (newest first)
export function getBlogPostsByYear() {
  const posts = getAllBlogPosts()
  
  const grouped = posts.reduce((acc, post) => {
    const year = post.year
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})
  
  // Sort years in descending order and return as an array of [year, posts] pairs
  const sortedYears = Object.keys(grouped)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map(year => [year, grouped[year]])
    
  return sortedYears
}

// Get a single blog post by slug
export function getBlogPost(slug) {
  const filename = getFilenameFromSlug(slug)
  
  if (!filename) {
    return null
  }
  
  const fullPath = path.join(blogDirectory, filename)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    filename,
    title: data.title || 'Untitled',
    date: data.date || '1970-01-01',
    description: data.description || '',
    tags: data.tags || [],
    content,
    year: new Date(data.date || '1970-01-01').getFullYear()
  }
}

// Convert markdown content to HTML
export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(gfm) // GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .process(markdown)
    
  return result.toString()
}

// Get blog post with processed HTML content
export async function getBlogPostWithContent(slug) {
  const post = getBlogPost(slug)
  
  if (!post) {
    return null
  }
  
  const htmlContent = await markdownToHtml(post.content)
  
  return {
    ...post,
    htmlContent
  }
}

// Get all blog post slugs (for static generation)
export function getAllBlogPostSlugs() {
  const files = getBlogPostFiles()
  return files.map(filename => getSlugFromFilename(filename))
}

