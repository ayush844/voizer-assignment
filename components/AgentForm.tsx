"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

import { SheetSide } from "./BottomSheet";

// Define the form's default values and structure
const defaultValues = {
  username: "",
  prompt: "",
};

export function ProfileForm() {
  const form = useForm({
    defaultValues,
  });

  const { watch, control } = form;

  // Watch all form values
  const formValues = watch();

  // Trigger onSubmit whenever formValues change
  useEffect(() => {
    onSubmit(formValues);
  }, [formValues]);

  const onSubmit = (data: typeof defaultValues) => {
    toast({ description: "form data updated" });
    console.log("Form Data Updated:", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-8 w-[40rem] mt-20">
        <div className=" w-full items-center justify-center">
          <SheetSide />
        </div>

        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className=" text-lg font-extrabold">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the voice name"
                    {...field}
                    className=" border-2 border-black"
                  />
                </FormControl>
                <FormDescription>
                  This is the voice name used by the agent.
                </FormDescription>
                <FormMessage />
              </FormItem>
              <FormItem>
                <TextareaWithLabel control={control} />
              </FormItem>
            </>
          )}
        />
      </form>
    </Form>
  );
}

function TextareaWithLabel({ control }: { control }) {
  return (
    <FormField
      control={control}
      name="prompt"
      render={({ field }) => (
        <div className="grid w-full gap-2">
          <Label htmlFor="message" className=" text-lg font-extrabold">
            Prompt
          </Label>
          <Textarea
            placeholder="Enter your prompt here."
            id="message"
            className=" min-h-44 max-h-80 border-2 border-black"
            {...field}
          />
        </div>
      )}
    />
  );
}
