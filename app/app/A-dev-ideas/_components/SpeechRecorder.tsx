'use client';

import { createWebmFile } from '@/app/_actions/writter-actions';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

// @ts-ignore
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
// Set up audio analyzer parameters
analyser.fftSize = 256; // Adjust as needed
const dataArray = new Uint8Array(analyser.frequencyBinCount);

type SpeechRecorderProps = {
    setSpeech: (speech: string) => void;
};

// Set a threshold value for silence detection
const silenceThreshold = -60; // Adjust as needed

// Set a minimum duration of silence before stopping recording (in milliseconds)
const minSilenceDuration = 2000; // 2 seconds, adjust as needed

export function SpeechRecorder({ setSpeech }: SpeechRecorderProps) {
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
        null
    );
    const silenceStartTimestamp = useRef<number | null>(null);

    const audioChunks = useRef<Blob[]>([]);

    useEffect(() => {
        if (
            navigator.mediaDevices &&
            // @ts-ignore
            navigator.mediaDevices.getUserMedia &&
            window.MediaRecorder
        ) {
            // APIs are supported!
        } else {
            alert(
                'La funcionalidad de grabación de voz no funciona en este navegador. Por favor, utiliza Chrome o Firefox.'
            );
        }
    }, []);

    useEffect(() => {
        return () => {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
            }
            // Revoke object URLs if you're storing them in state
        };
    }, [mediaRecorder]);

    const onRecord = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                // User has granted permission
                // Create a MediaRecorder instance
                setMediaRecorder(() => {
                    const mediaRecorder = new MediaRecorder(stream, {
                        mimeType: 'audio/webm',
                    });
                    // Set up event handlers for when data is available
                    mediaRecorder.ondataavailable = (event) => {
                        console.log('Data available', event.data);
                        // As data becomes available, add it to the audioChunks array
                        audioChunks.current.push(event.data);

                        // Analyze audio data in real-time
                        analyser.getByteFrequencyData(dataArray);
                        const amplitude =
                            dataArray.reduce((acc, val) => acc + val, 0) /
                            dataArray.length;

                        // Take actions based on the analysis (e.g., stop recording)
                        if (amplitude < silenceThreshold) {
                            mediaRecorder.stop();
                        }
                    };

                    mediaRecorder!.onstop = async () => {
                        // When recording stops, you can do something with the data
                        const audioBlob = new Blob(audioChunks.current, {
                            type: 'audio/webm',
                        });
                        const formData = new FormData();
                        formData.append('audio', audioBlob, 'recording.webm');

                        const transcription = await createWebmFile(formData);
                        setSpeech(transcription);
                        audioChunks.current = []; // Reset chunks for next recording
                        // const audioUrl = URL.createObjectURL(audioBlob);
                        // const audio = new Audio(audioUrl);
                        // audio.play();
                    };

                    mediaRecorder!.start();
                    return mediaRecorder;
                });
            })
            .catch((error) => {
                // User denied the permission or an error occurred
                console.error('Error accessing the microphone', error);
            });
    };

    const onStop = () => {
        if (!mediaRecorder) return;
        mediaRecorder.stop();
    };

    return (
        <div>
            <Button
                type='button'
                onClick={() => {
                    onRecord();
                }}
            >
                Grabar
            </Button>
            <Button
                type='button'
                onClick={() => {
                    onStop();
                }}
            >
                Parar
            </Button>
            <div>{mediaRecorder?.state}</div>
        </div>
    );
}
