
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import { Form, useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../@/components/ui/dialog"
import { Button } from "../@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "../@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../@/components/ui/form"
import { Input } from "../@/components/ui/input"
import { useForm } from "react-hook-form"
import { SelectItem } from "@radix-ui/react-select"



const formSchema = z.object({
  singer: z.string().min(2).max(50),
  song: z.string().min(2).max(50),
  genre: z.string().min(2).max(50),
  image: z.string().min(2),
})


export function Create() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      singer: '',
      song: '',
      genre: '',
      image: ''
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={"border-2 ring-1"}>Upload Song</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create song</DialogTitle>
          <DialogDescription className=" pt-3">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className=" flex  gap-x-3">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Artist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* {selected.map(select => ( */}
                    <SelectItem value="s"></SelectItem>
                    {/* // ))} */}

                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormField
                control={form.control}
                name="singer"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="create artist" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="song"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /><FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" >Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog >
  )
}
