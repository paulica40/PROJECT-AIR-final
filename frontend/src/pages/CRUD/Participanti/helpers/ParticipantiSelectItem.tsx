import axios from 'axios';
import React from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';
import { ParticipantiSelectItemProps } from '../../../../types/formik/participanti/participantiSelectItem';

async function selectList(query: string, limit: number) {
  const params = { query, limit };
  const response = await axios.get(`/participanti/autocomplete`, { params });
  return response.data;
}

const ParticipantiSelectItem = (props: ParticipantiSelectItemProps) => {
  const fetchToItem = (value: any, limit: number) => {
    return selectList(value, limit);
  };

  const mapper = {
    intoSelect(originalValue: ParticipantiSelectItemProps) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label ? originalValue.label : originalValue.Nume;

      return {
        key: value,
        value,
        label,
      };
    },

    intoValue(originalValue: ParticipantiSelectItemProps) {
      if (!originalValue) {
        return undefined;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  const { form, ...rest } = props;

  return (
    <React.Fragment>
      <AutocompleteFormItem {...rest} fetchFn={fetchToItem} mapper={mapper} form={form} />
    </React.Fragment>
  );
};

const select = (state: { [rest: string]: any }) => ({
  hasPermissionToCreate: state.participanti.hasPermissionToCreate,
});

export default connect(select)(ParticipantiSelectItem);
