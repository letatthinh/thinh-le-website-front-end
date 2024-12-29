import Papa from 'papaparse'
import {useEffect, useState} from 'react'

export default function useCsvReader(
  filePath,
  hasHeader = true,
  shouldSkipEmptyLines = true
) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchAndParseCsv = async() => {
      try {
        const response = await fetch(filePath)
        const csvText = await response.text()

        Papa.parse(csvText, {
          header: hasHeader,
          skipEmptyLines: shouldSkipEmptyLines,
          complete: (result) => {
            setData(result.data)
          }
        })
      } catch (fetchError) {
        throw fetchError.message
      }
    }

    fetchAndParseCsv()
  }, [filePath, hasHeader, shouldSkipEmptyLines])

  return {data}
}
