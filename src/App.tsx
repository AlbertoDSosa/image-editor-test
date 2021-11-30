import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { create, images } from 'ionicons/icons';
import Tab1 from './pages/AvatarEditorPage';
import Tab2 from './pages/CropperPage';
import Tab3 from './pages/TuiEditorPage';
import GalleryPage from './pages/GalleryPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/avatar-editor">
            <Tab1 />
          </Route>
          <Route exact path="/cropperjs">
            <Tab2 />
          </Route>
          <Route path="/toastui-editor">
            <Tab3 />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/avatar-editor" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="avatar-editor" href="/avatar-editor">
            <IonIcon icon={create} />
            <IonLabel>Avatar Editor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cropperjs" href="/cropperjs">
            <IonIcon icon={create} />
            <IonLabel>CropperJS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="toastui-editor" href="/toastui-editor">
            <IonIcon icon={create} />
            <IonLabel>Toast UI Editor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="gallery" href="/gallery">
            <IonIcon icon={images} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
