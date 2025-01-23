import {promises} from 'fs'
import Papa from 'papaparse'
import path from 'path'

const readFileFromPath = (_path) => {
  const fileFullPath = path.join(process.cwd(), _path)
  return promises.readFile(fileFullPath, 'utf8')
}

const readLocalCsv = async(_filePath, config = {
  hasHeader: true,
  skipEmptyLines: true
}) => {
  const fileContent = await readFileFromPath(_filePath)

  const {data} = Papa.parse(fileContent, {
    header: config.hasHeader,
    skipEmptyLines: config.skipEmptyLines
  })

  return data
}

const readLocalJson = async(_filePath) => {
  const fileContent = await readFileFromPath(_filePath)
  return JSON.parse(fileContent)
}

const fileUtility = {
  readLocalCsv,
  readLocalJson
}

export default fileUtility
