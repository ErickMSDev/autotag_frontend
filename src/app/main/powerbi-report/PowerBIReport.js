import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { models } from 'powerbi-client';
import FuseLoading from '@fuse/core/FuseLoading';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import { getEmbedInfo } from '../store/powerBiSlice';
import reducer from '../store/index';

function PowerBIReport() {
  const dispatch = useDispatch();
  const { embedInfo } = useSelector((store) => store.main.powerBi);

  const routeParams = useParams();
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);

  useEffect(() => {
    const { name } = routeParams;
    dispatch(getEmbedInfo(name)).then(() => setLoading(false));
  }, [dispatch, routeParams]);

  if (loading || !embedInfo) {
    return <FuseLoading />;
  }

  const accessToken = embedInfo.embedToken.token;
  const { embedUrl, reportId } = embedInfo.embedReport[0];

  return (
    <FusePageCarded
      content={
        <div className="w-full flex flex-col h-full">
          <FuseScrollbars className="grow overflow-x-auto">
            <PowerBIEmbed
              embedConfig={{
                type: 'report', // Supported types: report, dashboard, tile, visual and qna
                id: reportId,
                embedUrl,
                accessToken,
                tokenType: models.TokenType.Embed,
                settings: {
                  panes: {
                    filters: {
                      expanded: false,
                      visible: false,
                    },
                  },
                  localeSettings: {
                    language: 'es',
                    formatLocale: 'es-CL',
                  },
                  navContentPaneEnabled: false,
                  background: models.BackgroundType.Transparent,
                  layoutType: models.LayoutType.Custom,
                  customLayout: {
                    displayOption: models.DisplayOption.FitToWidth,
                  },
                },
              }}
              eventHandlers={
                new Map([
                  [
                    'loaded',
                    () => {
                      console.log('Report loaded');
                    },
                  ],
                  [
                    'rendered',
                    () => {
                      console.log('Report rendered');
                    },
                  ],
                  [
                    'error',
                    (event) => {
                      console.error('Error powerbi');
                      console.log(event.detail);
                    },
                  ],
                ])
              }
              cssClassName="h-full"
              getEmbeddedComponent={(embeddedReport) => {
                setReport(embeddedReport);
              }}
            />
          </FuseScrollbars>
        </div>
      }
    />
  );
}

export default withReducer('main', reducer)(PowerBIReport);
