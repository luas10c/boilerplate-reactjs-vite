import {
  http,
  HttpResponse,
  type RequestHandler,
  type WebSocketHandler
} from 'msw'
import { setupWorker } from 'msw/browser'

const handlers: Array<RequestHandler | WebSocketHandler> = [
  http.get('/', async function () {
    return HttpResponse.json({ message: 'Hello, World!' }, { status: 400 })
  })
]

const worker = setupWorker(...handlers)

await worker.start()
