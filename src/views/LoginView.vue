<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/shadcn/ui/form';
import {
  Input
} from '@/components/shadcn/ui/input';
import Button from "@/components/shadcn/ui/button/Button.vue";
import * as z from 'zod';
import Card from "@/components/shadcn/ui/card/Card.vue";
import CardHeader from "@/components/shadcn/ui/card/CardHeader.vue";
import CardTitle from "@/components/shadcn/ui/card/CardTitle.vue";
import CardDescription from "@/components/shadcn/ui/card/CardDescription.vue";
import CardContent from "@/components/shadcn/ui/card/CardContent.vue";
import Heading from "@/components/Heading.vue";

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string()
}))

const form = useForm({
  validationSchema: formSchema,
})

const submit = form.handleSubmit(values => {
  alert(JSON.stringify(values))
})

</script>

<template>

  <div class="container flex flex-col sm:grid sm:grid-cols-12 gap-2 max-w-xl px-0">
    <Card class="hidden sm:inline col-span-4 px-0 bg-slate-950">
      <CardContent class="flex flex-col h-full justify-end text-white">
        <Heading h="1" class="tracking-tight leading-tight">Sample <span class="block">Sign in Page</span></Heading>
      </CardContent>
    </Card>
    <Card class="col-span-8 px-0">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in to your Dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="submit" class="flex flex-col gap-4">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="yourname@domain.com" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>

</template>

<style scoped>

</style>