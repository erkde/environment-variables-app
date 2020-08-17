import { getStaticProps } from './index'
import { interopDefault } from 'next/dist/next-server/server/load-components'

describe("process.env", () => {
  it('has ENV_VARIABLE from .env', () => {
    expect(process.env).toHaveProperty("ENV_VARIABLE")
  })

  it('has TEST_ENV_VARIABLE from .env.test', () => {
    expect(process.env).toHaveProperty("TEST_ENV_VARIABLE")  
  })

  // ensure we're NODE_ENV is 'test'
  // https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables
  it('has a correct NODE_ENV', () => {
    expect(process.env.NODE_ENV).toEqual('test')
  })
})
