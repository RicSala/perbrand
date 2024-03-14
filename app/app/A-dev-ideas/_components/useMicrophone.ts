import { createWebmFile } from '@/app/_actions/writter-actions';
import { useState, useEffect, useCallback, useRef } from 'react';

interface MicrophoneHookReturn {
    isRecording: boolean;
    startRecording: () => void;
    stopRecording: () => void;
    toggleRecording: () => void;
    audioData: Blob | null;
    error: string | null;
    initMediaRecorder: () => void;
}

interface UseMicrophoneProps {
    onMicAllowed: (isAllowed: boolean) => void;
    setSpeech: (speech: string) => void;
}

const useMicrophone = ({
    onMicAllowed,
    setSpeech,
}: UseMicrophoneProps): MicrophoneHookReturn => {
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [audioData, setAudioData] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);

    // Clean up media recorder
    useEffect(() => {
        const mediaRecorder = mediaRecorderRef.current;
        // clean up function
        return () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
        };
    }, [mediaRecorderRef]);

    // Check for media devices support
    useEffect(() => {
        // Check for media devices support
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert('getUserMedia() not supported.');
            setError(
                'Media Devices API or getUserMedia not supported in this browser.'
            );
            return;
        }
    }, []);

    const initMediaRecorder = useCallback(async () => {
        let stream: MediaStream | null = null;
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            onMicAllowed(true);

            if (typeof MediaRecorder === 'undefined') {
                // Handle the lack of MediaRecorder support
                alert('MediaRecorder not supported on this device/browser');
                setError('MediaRecorder not supported on this device/browser');
            }

            const mimeType = 'audio/webm';

            if (
                MediaRecorder.isTypeSupported &&
                !MediaRecorder.isTypeSupported(mimeType)
            ) {
                // Handle the lack of MIME type support
                alert(`${mimeType} is not supported on this device/browser`);
                setError('MediaRecorder not supported on this device/browser');

                return;
            }

            const recorder = new MediaRecorder(stream!, {
                mimeType,
            });
            recorder.ondataavailable = (e) => {
                chunksRef.current.push(e.data);
            };

            recorder!.onstop = async () => {
                console.log('recording stopped');
                // When recording stops, you can do something with the data
                const audioBlob = new Blob(chunksRef.current, {
                    type: mimeType,
                });
                setAudioData(audioBlob);
                const formData = new FormData();
                formData.append('audio', audioBlob, 'recording.webm');

                const transcription = await createWebmFile(formData);
                setSpeech(transcription);
                console.log(transcription);
                chunksRef.current = []; // Reset chunks for next recording
                // const audioUrl = URL.createObjectURL(audioBlob);
                // const audio = new Audio(audioUrl);
                // audio.play();
            };
            mediaRecorderRef.current = recorder;
            console.log('MediaRecorder initialized');
        } catch (err) {
            onMicAllowed(false);
        }
    }, [onMicAllowed, setSpeech]);

    const startRecording = useCallback(() => {
        if (!mediaRecorderRef.current) {
            return;
        }
        console.log('start recording');
        setIsRecording(true);
        mediaRecorderRef.current.start();
    }, []);

    const stopRecording = useCallback(() => {
        console.log('stop recording');
        if (!mediaRecorderRef.current) {
            setError('MediaRecorder not initialized.');
            return;
        }
        setIsRecording(false);
        mediaRecorderRef.current.stop();
    }, []);

    const toggleRecording = useCallback(() => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    }, [isRecording, startRecording, stopRecording]);

    return {
        isRecording,
        initMediaRecorder,
        startRecording,
        stopRecording,
        toggleRecording,
        audioData,
        error,
    };
};

export default useMicrophone;

const videoTypes = ['webm', 'ogg', 'mp4', 'x-matroska'] as const;
const audioTypes = ['webm', 'ogg', 'mp3', 'x-matroska'] as const;
const codecs = [
    'should-not-be-supported',
    'vp9',
    'vp9.0',
    'vp8',
    'vp8.0',
    'avc1',
    'av1',
    'h265',
    'h.265',
    'h264',
    'h.264',
    'opus',
    'pcm',
    'aac',
    'mpeg',
    'mp4a',
] as const;
const media = ['audio', 'video'] as const;

type TMedia = (typeof media)[number];
type TVideoTypes = typeof videoTypes;
type TAudioTypes = typeof audioTypes;
type TCodecs = typeof codecs;

function getSupportedMimeTypes(
    media: TMedia,
    types: TAudioTypes,
    codecs: TCodecs
) {
    const isSupported = MediaRecorder.isTypeSupported;
    const supported: string[] = [];
    types.forEach((type) => {
        const mimeType = `${media}/${type}`;
        codecs.forEach((codec) =>
            [
                `${mimeType};codecs=${codec}`,
                `${mimeType};codecs=${codec.toUpperCase()}`,
                // /!\ false positive /!\
                // `${mimeType};codecs:${codec}`,
                // `${mimeType};codecs:${codec.toUpperCase()}`
            ].forEach((variation) => {
                if (isSupported(variation)) supported.push(variation);
            })
        );
        if (isSupported(mimeType)) supported.push(mimeType);
    });
    return supported;
}
