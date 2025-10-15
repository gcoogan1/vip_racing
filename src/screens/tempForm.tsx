import { useForm, FormProvider } from "react-hook-form";
import SelectInput from "../components/inputs/selectInput/selectInput";
import TextInput from "../components/inputs/textInput/textInput";
import SelectBox from "../components/inputs/selectBox/selectBox";

const TempForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      country: "",
      agree: false,
    },
  });

  const { control } = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextInput name="email" label="Label" placeholder="Label" />
        <SelectInput
          name={"country"}
          label={"Country"}
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
        <SelectBox control={control} name="agree" label="I agree" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default TempForm;
