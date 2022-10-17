import React, { useEffect } from 'react';
import IndicatoriWidget from 'pages/CRUD/Indicatori/page/IndicatoriWidget';
import actions from 'store/actions/indicatori/indicatoriFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const IndicatoriViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <IndicatoriWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default IndicatoriViewPage;
