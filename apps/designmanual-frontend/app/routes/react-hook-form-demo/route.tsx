import { Heading, Input, Stack, Textarea } from "@vygruppen/spor-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Component() {
  const { register, control } = useForm({
    mode: "onSubmit",
    values: {
      test: 1000,
    },
  });

  return (
    <Stack gap={2} maxW={"400px"}>
      <Textarea {...register("test")} label={"Uncontrolled"} />
      <Input {...register("test")} label={"Uncontrolled"} />

      <Controller
        name={"test"}
        control={control}
        render={({ field }) => <Input {...field} label={"Controlled"} />}
      />

      <SporTest />
      <SporTestTextArea />
    </Stack>
  );
}

export const SporTest = () => {
  const { register, setValue } = useForm<{ name: string }>();
  useEffect(() => {
    setValue("name", "Ola Nordman");
  }, [setValue]);
  return (
    <Stack minW="50vw">
      <Heading as="h2">Spor test with setState</Heading>
      <Input label="Navn" {...register("name")}></Input>
    </Stack>
  );
};

export const SporTestTextArea = () => {
  const { register, setValue } = useForm<{ name: string }>();
  useEffect(() => {
    setValue("name", "Ola Nordman");
  }, [setValue]);
  return (
    <Stack minW="50vw">
      <Heading as="h2">Spor test with setState</Heading>
      <Textarea label="Navn" {...register("name")}></Textarea>
    </Stack>
  );
};
