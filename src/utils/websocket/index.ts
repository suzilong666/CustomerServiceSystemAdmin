import { useUserStoreHook } from "@/store/modules/user";

export default class Chat {
  public ws = null;

  constructor() {
    // 创建 WebSocket 连接
    const ws = (this.ws = new WebSocket("ws://127.0.0.1:7272"));

    // 连接成功时的回调函数
    ws.onopen = this.onOpen.bind(this);

    // 接收到服务器发送的消息时的回调函数
    ws.onmessage = this.onMessage.bind(this);

    // 连接关闭时的回调函数
    ws.onclose = this.onClose.bind(this);

    // 发生错误时的回调函数
    ws.onerror = this.onError.bind(this);
  }

  send(type: string, data: object) {
    this.ws.send(
      JSON.stringify({
        type,
        data
      })
    );
  }

  onOpen() {
    const token = useUserStoreHook().token;
    this.send("login", {
      token
    });
  }

  onMessage() {}

  onClose() {}

  onError() {}
}
