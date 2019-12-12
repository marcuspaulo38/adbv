import styled from 'styled-components';
import isoTabs, { TabPane } from '../../../components/uielements/tabs';

const CustomTabTheme = ComponentName => styled(ComponentName)`
    &.ant-tabs {
        .ant-tabs-bar {
            margin: 0;
            -webkit-transition: padding 0s;
            transition: padding 0s;
        }

        &.ant-tabs-card .ant-tabs-card-bar {
            .ant-tabs-tab {
                font-size: 1rem;
                padding: 0 25px;
                border-radius: 0 0;
                -webkit-transition: all 0s;
                transition: all 0s;
            }
    
            .ant-tabs-tab-active {
                color: white;
                background-color: #0078d4;
                font-size: 1rem;
                font-weight: 300;
            }
        }
    }   
`;

const TabContentStyle = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  position: relative;
`;

const ColumnStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const Tabs = CustomTabTheme(isoTabs)

export { TabContentStyle, ColumnStyle, Tabs, TabPane };