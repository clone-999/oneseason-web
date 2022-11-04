import React from "react";
import { GrLocation } from "react-icons/gr";
import styles from './SuggestionRow.module.css'

const SuggestionRow = ({item, setPort, setDisplay, setSearchTerm, setDestinationsId, setLatitude, setLongitude}) => (
  <div className={styles.dropdown} onClick={() => {
    setPort({ viewport: {latitude: item.latitude, longitude: item.longitude} })
    setDisplay(false)
    setSearchTerm(item.name)
    setDestinationsId(item.city_ufi ? item.city_ufi : item.dest_id)
    setLatitude(item.latitude)
    setLongitude(item.longitude)
  }}>
    <div className={styles.dropdownRow}>
      <GrLocation className={styles.iconContainer} size={30} />
      <div className={styles.locationText}>{item.name}</div>
    </div>
  </div>
)

export default SuggestionRow;
