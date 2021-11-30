import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './styles.module.css';
import ToastUIEditor from 'components/ui/ToastUIEditor';

const TuiEditorPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toast UI Editor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Toast UI Editor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ToastUIEditor
          includeUI={{
            loadImage: {
              path: 'assets/img/sampleImage.jpg',
              name: 'SampleImage'
            },
            menu: [
              'crop',
              'flip',
              'rotate',
              'draw',
              'shape',
              'icon',
              'text',
              'mask',
              'filter'
            ],
            initMenu: 'crop',
            uiSize: {
              width: '1250px',
              height: '700px'
            },
            menuBarPosition: 'bottom'
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70
          }}
          usageStatistics={true}
        />
      </IonContent>
    </IonPage>
  );
};

export default TuiEditorPage;
