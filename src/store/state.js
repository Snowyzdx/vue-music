import {playMode} from 'common/js/config'

const state={
  singer:{},
  playing:false,//播放
  fullScreen:false,
  playList:[],//播放列表
  sequenceList:[],//顺序列表（）
  mode:playMode.sequence,//播放模式
  currentIndex:-1,//当前播放的歌曲的索引
  disc:{},
  topList:{}
}

export default state
