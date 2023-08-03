**프론트엔드 개발자 신동재**

<br/>

### 사용 방법

---

1.해당 레포지토리를 `clone`한 후 `npm install`합니다.

<br/>

2.서버를 실행시키기 위해서는 `mkcert`를 설치해야합니다.

```bash
$ mkcert -install
```

```bash
reated a new local CA 💥
Sudo password:
Sorry, try again.
Sudo password:
The local CA is now installed in the system trust store! ⚡️
```

```bash
$ mkcert "localhost.json2bot.chat"
```

```bash
Created a new certificate valid for the following names 📜
 - "localhost.json2bot.chat"

The certificate is at "./localhost.json2bot.chat.pem" and the key at "./localhost.json2bot.chat-key.pem" ✅

It will expire on 12 October 2023 🗓
```

<br/>

설치가 완료되면 `npm start`로 실행히키면 됩니다.( `https://localhost.json2bot.chat:3000/` )

<br/>
<br/>

### 폴더구조

---

```
src
├─ assets
├─ components
|    └─ common
├─ context
├─ hooks
├─ public
├─ service
├─ style
└─ utils
```

<br/>
<br/>

### 사용한 기술

---

- React
- Axios
- React-icons

<br/>
<br/>
