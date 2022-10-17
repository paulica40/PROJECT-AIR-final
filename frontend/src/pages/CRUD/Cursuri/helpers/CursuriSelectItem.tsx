import axios from 'axios';
import React from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';
import { CursuriSelectItemProps } from '../../../../types/formik/cursuri/cursuriSelectItem';

async function selectList(query: string, limit: number) {
  const params = { query, limit };
  const response = await axios.get(`/cursuri/autocomplete`, { params });
  return response.data;
}

const CursuriSelectItem = (props: CursuriSelectItemProps) => {
  const fetchToItem = (value: any, limit: number) => {
    return selectList(value, limit);
  };

  const mapper = {
    intoSelect(originalValue: CursuriSelectItemProps) {
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

    intoValue(originalValue: CursuriSelectItemProps) {
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
  hasPermissionToCreate: state.cursuri.hasPermissionToCreate,
});

export default connect(select)(CursuriSelectItem);
