import React, { useEffect } from 'react';
import ParticipantiWidget from 'pages/CRUD/Participanti/page/ParticipantiWidget';
import actions from 'store/actions/participanti/participantiFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const ParticipantiViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <ParticipantiWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default ParticipantiViewPage;
