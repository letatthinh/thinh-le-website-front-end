import React, {useState} from 'react'

const ExpandableBox = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  return (
    <div className='flex flex-col items-center space-y-4'>
      <button
        onClick={toggleExpansion}
        className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <div
        className={'overflow-hidden transition-all duration-500 ease-in-out bg-gray-200 rounded'}
        style={{
          width: expanded ? '300px' : '100px', // Change these values as needed
          height: '150px' // Set a fixed height
        }}>
        <p className='p-4'>
          This is an expandable box. Click the button to toggle its size.
        </p>
      </div>
    </div>
  )
}

export default ExpandableBox
