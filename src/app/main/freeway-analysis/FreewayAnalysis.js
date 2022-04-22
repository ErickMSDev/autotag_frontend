import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Icon from '@mui/material/Icon';
import { motion } from 'framer-motion';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import FuseLoading from '@fuse/core/FuseLoading';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import { getEmbedInfo } from '../store/freewayAnalysisSlice';
import reducer from '../store/index';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 68,
      height: 68,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function FreewayAnalysis() {
  const dispatch = useDispatch();
  const { embedInfo } = useSelector((store) => store.main.freewayAnalysis);

  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);

  useEffect(() => {
    dispatch(getEmbedInfo()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading || !embedInfo) {
    return <FuseLoading />;
  }

  const accessToken = embedInfo.embedToken.token;
  const { embedUrl, reportId } = embedInfo.embedReport[0];

  // console.log({ loading });
  // console.log({ embedInfo });
  // console.log({ report });
  // console.log({ accessToken });
  // console.log({ embedUrl });
  // console.log({ reportId });

  return (
    <Root
      header={
        <div className="flex flex-1 w-full items-center justify-between">
          <div className="flex items-center">
            <Icon
              component={motion.span}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.2 } }}
              className="text-24 md:text-32"
            >
              shopping_basket
            </Icon>
            <Typography
              component={motion.span}
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.2 } }}
              delay={300}
              className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
            >
              Análisis de Autopistas
            </Typography>
          </div>
        </div>
      }
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

export default withReducer('main', reducer)(FreewayAnalysis);
