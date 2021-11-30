import { useRef, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow
} from '@ionic/react';
import './styles.module.css';
import AvatarEditor from 'react-avatar-editor';

const AvatarEditorPage: React.FC = () => {
  const fileInput = useRef(null);
  const imageRef = useRef(null);
  const [imageSelected, setImageSelected] = useState(null);
  const [imageResult, setImageResult] = useState(null);

  const onSelectFile = () => {
    // @ts-ignore
    const file: File = fileInput?.current?.files[0];
    const reader = new FileReader();
    reader.onload = function (evt) {
      // @ts-ignore
      setImageSelected(evt.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onClickSave = () => {
    if (imageRef) {
      // @ts-ignore
      const canvasScaled = imageRef.current.getImageScaledToCanvas();
      setImageResult(canvasScaled.toDataURL());
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Avatar Editor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Avatar Editor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <input
              ref={fileInput}
              hidden
              name="avatar"
              type="file"
              accept="image/png, image/jpeg"
              onChange={onSelectFile}
            />
            <IonButton
              color="primary"
              onClick={(ev) => {
                // @ts-ignore
                fileInput.current.click();
              }}
            >
              Image
            </IonButton>
            <IonButton color="primary" onClick={onClickSave}>
              Save
            </IonButton>
          </IonRow>
          <IonRow>
            {imageSelected && (
              <AvatarEditor
                ref={imageRef}
                image={imageSelected}
                width={500}
                height={500}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
              />
            )}
          </IonRow>
          <IonRow>
            {imageResult && <img src={imageResult} alt="avatar" />}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AvatarEditorPage;
