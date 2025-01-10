export default function FilterPanelClient({
  ref, className
}) {

  return <section ref={ref} className={className}>
    <div
      className='w-full py-5 px-3 bg-white border border-gray-200 rounded-lg'>
      <div data-hs-range-slider='{
    "start": 50,
    "connect": "lower",
    "range": {
      "min": 0,
      "max": 100
    },
    "cssClasses": {
      "target": "target relative h-2 rounded-full bg-gray-100 dark:bg-neutral-700",
      "base": "base w-full h-full relative z-1",
      "origin": "origin absolute top-0 end-0 w-full h-full origin-[0_0] rounded-full",
      "handle": "handle absolute top-1/2 end-0 w-[1.125rem] h-[1.125rem] bg-white border-4 border-blue-600 rounded-full cursor-pointer translate-x-2/4 -translate-y-2/4 dark:border-blue-500",
      "connects": "connects relative z-0 w-full h-full rounded-full overflow-hidden",
      "connect": "connect absolute top-0 end-0 z-1 w-full h-full bg-blue-600 origin-[0_0] dark:bg-blue-500",
      "touchArea": "touch-area absolute -top-1 -bottom-1 -start-1 -end-1"
    }
  }'></div>
    </div>
  </section>
}
