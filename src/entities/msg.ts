import dayjs from 'dayjs'

export default class Msg {
  public text: string
  public type: MsgType
  public sender: string
  public createdTime: string

  constructor(params: MsgParams) {
    this.text = params.text
    this.type = params.type || 'text'
    this.sender = params.sender
    this.createdTime = dayjs().toISOString()
  }
}

export type MsgType = 'text'
export interface MsgParams {
  text: string
  type?: MsgType
  sender: string
}
