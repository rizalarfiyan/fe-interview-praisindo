import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { shallow } from 'zustand/shallow'

import { Button } from '@/Components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'

import useAuth from '@/stores/auth'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, { message: 'Must be at least 5 characters' }),
})

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const navigate = useNavigate()
  const [login, auth] = useAuth((state) => [state.login, state.auth], shallow)
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values.email)
  }

  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth])

  if (auth) return null

  return (
    <div className='min-h-screen w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='min-h-[calc(100vh_-_112px)] space-y-4'>
            <div className='space-y-2 pb-4 pt-12 text-center'>
              <h1 className='text-4xl font-bold'>Log In</h1>
              <p className='text-xl font-semibold'>Fill the form to log in</p>
            </div>
            <div className='space-y-4 rounded-md bg-white p-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input placeholder='Your e-mail' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex items-center justify-between gap-4'>
              <Link to='/working' className='font-semibold'>
                Register Now
              </Link>
              <Link to='/working' className='text-slate-500'>
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className='py-6'>
            <Button type='submit' variant='primary' className='w-full'>
              Log in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login
