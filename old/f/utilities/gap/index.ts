import GapSize from "@/types/enums/gap-size"

const getGapWidthBySize = (
  _gapSize: GapSize
) => {
  switch (_gapSize) {
    case GapSize.Small:
      return 6
    case GapSize.Medium:
      return 12
    case GapSize.Large:
      return 24
    default:
      return 0
  }
}

const gapUtility = {
  getGapWidthBySize
}

export default gapUtility