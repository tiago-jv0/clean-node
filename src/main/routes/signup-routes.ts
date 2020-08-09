import { Router, Request, Response } from 'express'
export default (router: Router): void => {
  router.post('/signup', (req: Request, resp: Response): void => {
    resp.json({ ok: 'ok' })
  })
}
