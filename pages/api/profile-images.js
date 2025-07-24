import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const profileDir = path.join(process.cwd(), 'public', 'images', 'profile')
    const files = fs.readdirSync(profileDir)
    
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)
    })
    
    const imagePaths = imageFiles.map(file => `/images/profile/${file}`)
    
    res.status(200).json(imagePaths)
  } catch (error) {
    console.error('Error reading profile images:', error)
    res.status(500).json({ error: 'Failed to read profile images' })
  }
}