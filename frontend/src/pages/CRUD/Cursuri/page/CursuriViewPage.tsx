import React, { useEffect } from 'react';
import CursuriWidget from 'pages/CRUD/Cursuri/page/CursuriWidget';
import actions from 'store/actions/cursuri/cursuriFormActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useParams } from 'react-router';

const CursuriViewPage = () => {
  const loading = useTypedSelector((store) => store.users.form.findLoading);
  const record = useTypedSelector((store) => store.users.form.record);
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(actions.doFind(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <CursuriWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

export default CursuriViewPage;
