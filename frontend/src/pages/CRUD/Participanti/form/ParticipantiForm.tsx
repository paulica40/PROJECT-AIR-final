import { Formik } from 'formik';
import React from 'react';
import Loader from 'components/Loader';

// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
// eslint-disable-next-line no-unused-vars
import InputNumberFormItem from 'components/FormItems/items/InputNumberFormItem';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import CheckboxFormItem from 'components/FormItems/items/CheckboxFormItem';
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars
import TextAreaFormItem from 'components/FormItems/items/TextAreaFormItem';
// eslint-disable-next-line no-unused-vars

import participantiFields from 'pages/CRUD/Participanti/helpers/participantiFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import IndicatoriSelectItem from 'pages/CRUD/Indicatori/helpers/IndicatoriSelectItem';

import UsersSelectItem from 'pages/CRUD/Users/helpers/UsersSelectItem';

import CursuriSelectItem from 'pages/CRUD/Cursuri/helpers/CursuriSelectItem';

type ParticipantiFormProps = {
  isEditing: boolean;
  isProfile: boolean;
  findLoading: boolean;
  saveLoading: boolean;
  record: {
    [rest: string]: any;
  };
  onSubmit: Function;
  onCancel: Function;
  modal?: any;
  currentUser?: any;
};

const ParticipantiForm = (props: ParticipantiFormProps) => {
  const { isEditing, isProfile, findLoading, saveLoading, record, onSubmit, onCancel, modal } =
    props;

  const iniValues = () => {
    return IniValues(participantiFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(participantiFields, record || {});
  };

  const handleSubmit = (values: { [rest: string]: any }) => {
    // @ts-ignore
    const { id, ...data } = PreparedValues(participantiFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }

    return isEditing ? 'Edit Participanti' : 'Add Participanti';
  };

  // @ts-ignore
  const renderForm = () => (
    <Widget title={<h4>{title()}</h4>} collapse close>
      <Formik
        onSubmit={handleSubmit}
        initialValues={iniValues()}
        validationSchema={formValidations()}
      >
        {(form) => (
          <form onSubmit={form.handleSubmit}>
             <SelectFormItem name={'Partener'} schema={participantiFields}  form={form} />
            <InputFormItem name={'Nume'} schema={participantiFields} autoFocus />

            <InputFormItem name={'Prenume'} schema={participantiFields} />

            <InputNumberFormItem name={'Varsta'} schema={participantiFields} />

            <InputNumberFormItem name={'Telefon'} schema={participantiFields} />

            <InputFormItem name={'email'} schema={participantiFields} />

            <InputNumberFormItem name={'Cnp'} schema={participantiFields} />

            <RadioFormItem name={'Gen'} schema={participantiFields} />

            <InputFormItem name={'Nationalitate'} schema={participantiFields} />

            <SelectFormItem name={'Judet'} schema={participantiFields} form={form} />

            <InputFormItem name={'Adresa'} schema={participantiFields} />

            <SelectFormItem name={'Domiciliul'} schema={participantiFields} form={form} />

            <InputFormItem name={'Companie'} schema={participantiFields} />

            <InputFormItem name={'Domeniu'} schema={participantiFields} />

            <InputFormItem name={'Functie'} schema={participantiFields} />

            <SelectFormItem name={'Statut'} schema={participantiFields} form={form} />

            <SelectFormItem name={'ISCED'} schema={participantiFields} form={form} />

            <DatePickerFormItem name={'INTRARE'} schema={participantiFields}  />

            <DatePickerFormItem name={'IESIRE'} schema={participantiFields} />

            <IndicatoriSelectItem
              name={'INDICATORI'}
              schema={participantiFields}
              showCreate={!modal}
              mode="multiple"
              form={form}
            />


            <DatePickerFormItem name={'ELIGIBILITATE'} schema={participantiFields} />

            <UsersSelectItem
              name={'EXPERT'}
              schema={participantiFields}
              showCreate={!modal}
              form={form}
            />

            <DatePickerFormItem name={'BFA'} schema={participantiFields} />

            <DatePickerFormItem name={'CONSILIERE'} schema={participantiFields} showTimeInput />

            <CursuriSelectItem
              name={'Cursuri'}
              schema={participantiFields}
              showCreate={!modal}
              mode="multiple"
              form={form}
            />
<SelectFormItem name={'Pocu'} schema={participantiFields} form={form} />
<SelectFormItem name={'Status'} schema={participantiFields} form={form} />

            <div className="form-buttons">
              <button
                className="btn btn-primary"
                disabled={saveLoading}
                type="button"
                // @ts-ignore
                onClick={(e: React.FormEvent<HTMLFormElement>) => form.handleSubmit(e)}
              >
                Save
              </button>{' '}
              <button
                className="btn btn-light"
                type="button"
                disabled={saveLoading}
                onClick={form.handleReset}
              >
                Reset
              </button>{' '}
              <button
                className="btn btn-light"
                type="button"
                disabled={saveLoading}
                onClick={() => onCancel()}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Widget>
  );

  if (findLoading) {
    return <Loader />;
  }

  if (isEditing && !record) {
    return <Loader />;
  }

  return renderForm();
};

export default ParticipantiForm;
