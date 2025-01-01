import {promises as fs} from 'fs'
import Papa from 'papaparse'
import path from 'path'

const readLocalCsv = async(_filePath, config = {
  hasHeader: true,
  skipEmptyLines: true
}) => {
  const fileFullPath = path.join(process.cwd(), _filePath)
  const fileContent = await fs.readFile(fileFullPath, 'utf8')

  const {data} = Papa.parse(fileContent, {
    header: config.hasHeader,
    skipEmptyLines: config.skipEmptyLines
  })

  return data
}

const fileUtility = {
  readLocalCsv
}

export default fileUtility
