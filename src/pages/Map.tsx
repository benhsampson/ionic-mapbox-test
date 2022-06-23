import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef } from "react";
import mapbox from 'mapbox-gl'

mapbox.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN!

const Map: React.FC = () => {
  const mapContainerRef = useRef(null)
  useEffect(() => {
    const map = new mapbox.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
    })

    return () => {map.remove()}
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div ref={mapContainerRef} />
      </IonContent>
    </IonPage>
  )
}

export default Map;