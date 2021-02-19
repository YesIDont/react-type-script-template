import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { Navigation } from 'components/Navigation';
import { SEO } from 'components/SEO';
import storeContext from 'stores/globalStore';
import * as Styled from './App.styled';

export const App: React.FC = observer(() => {
    const store = useContext(storeContext);

    return (
        <Styled.App>
            <SEO />
            <Navigation />
            <div>{store.getContent()}</div>
        </Styled.App>
    );
});
