import { NoDataIcon, NoDataText, NodataContainer } from "./Nodatastyles"

import NodataIcon from '../../../assets/nodata.png'

const NodataFound = () => {
    return (
          <NodataContainer>
             <NoDataIcon src={NodataIcon} alt="No data found"/>
             <NoDataText>No data found</NoDataText>
          </NodataContainer>
    )
}

export default NodataFound