import React from 'react'
import { AppRegistry,Button, StyleSheet, View } from 'react-native'
import Video from 'react-native-af-video-player'

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center'
  }
})

const url = 'http://172.20.10.4:8080/updata/res/ExcelData/name.mp4'

export default class VideoExample extends React.Component {
  
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
         <Video autoPlay={true} url={url} ref={(ref) => { this.video = ref }} />
         <Button onPress={() => this.video.play()} title="Play"></Button>
          <Button onPress={() => this.video.pause()} title="Pause"></Button>
      </View>
    )
  }
}

