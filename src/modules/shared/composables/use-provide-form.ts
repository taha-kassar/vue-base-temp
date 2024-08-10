import { inject, provide } from 'vue';
import { useForm, type FormContext, type GenericObject } from 'vee-validate';

export const useProvideForm = (): FormContext<GenericObject> => {
  const { values, resetField, ...rest } = useForm();

  provide('formProps', { values, resetField, ...rest });

  return {
    values,
    resetField,
    ...rest,
  };
};

export const useInjectForm = (): FormContext<GenericObject> => {
  const props = inject<FormContext<GenericObject>>('formProps')!;

  return {
    ...props,
  };
};
