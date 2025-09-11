
/**
 * Interface for collection block data.
 */
export type CollectionBlockType = {
    [k: string]: {
        label: string;
        children?: CollectionBlockType;
        file?: string;
    }
}

/**
 * All the blocks present in the repository.
 * This is used by Menu bar to show the block buttons.
 */


//TODO : Add the blocks to the collectionBlocks object
//TODO : Add the blocks to the getCollectionBlock function
//TODO : Add the blocks to the blockFactory function

export const collectionBlocksFiles: Record<string, CollectionBlockType> = {
    blocks: {
        control: {
            label: 'Control',
            children: {
                motorDriver: { label: 'MotorDriver', file: 'MotorDriver.json' },
                pid: { label: 'PID', file: 'PID.json' },
                teleoperator: { label: 'Teleoperator', file: 'Teleoperator.json' }
            }
        },
        opencv: {
            label: 'OpenCV',
            children: {
                blur: { label: 'Blur', file: 'Blur.json' },
                camera: { label: 'Camera', file: 'Camera.json' },
                colorFilter: { label: 'Color Filter', file: 'ColorFilter.json' },
                contourDetector: { label: 'Contour Detector', file: 'ContourDetector.json' },
                cropper: { label: 'Cropper', file: 'Cropper.json' },
                dilation: { label: 'Dilation', file: 'Dilation.json' },
                edgeDetector: { label: 'Edge Detector', file: 'EdgeDetector.json' },
                erosion: { label: 'Erosion', file: 'Erosion.json' },
                faceDetector: { label: 'Face Detector', file: 'FaceDetector.json' },
                imageRead: { label: 'Image Read', file: 'ImageRead.json' },
                screen: { label: 'Screen', file: 'Screen.json' },
                threshold: { label: 'Threshold', file: 'Threshold.json' },
                videoStreamer: { label: 'Video Streamer', file: 'VideoStreamer.json' }
            }
        },
        rossensors: {
            label: 'ROS-Sensors',
            children: {
                cameraRos: { label: 'CameraROS', file: 'ROSCamera.json' },
                odometer: { label: 'Odometer', file: 'ROS-Odometer.json' },
                imu: { label: 'IMU', file: 'ROS-IMU.json' }
            }
        },
        tensorflow: {
            label: 'TensorFlow',
            children: {
                objectDetector: { label: 'Object Detector', file: 'ObjectDetector.json' }
            }
        }
    },
    vision: {
        yolo: {
            label: 'YOLO',
            children: {
                yolov8: { label: 'YOLOv8 Detector', file: 'yolov8.json' }
            }
        }
    },
    processing: {
        control: {
            label: 'Control',
            children: {
                pid: { label: 'PID', file: 'PID.json' }
            }
        },
        opencv: {
            label: 'OpenCV',
            children: {
                blur: { label: 'Blur', file: 'Blur.json' },
                colorFilter: { label: 'Color Filter', file: 'ColorFilter.json' },
                contourDetector: { label: 'Contour Detector', file: 'ContourDetector.json' },
                cropper: { label: 'Cropper', file: 'Cropper.json' },
                dilation: { label: 'Dilation', file: 'Dilation.json' },
                edgeDetector: { label: 'Edge Detector', file: 'EdgeDetector.json' },
                erosion: { label: 'Erosion', file: 'Erosion.json' },
                faceDetector: { label: 'Face Detector', file: 'FaceDetector.json' },
                threshold: { label: 'Threshold', file: 'Threshold.json' }
            }
        },
        tensorflow: {
            label: 'TensorFlow',
            children: {
                objectDetector: { label: 'Object Detector', file: 'ObjectDetector.json' }
            }
        }
    },
    ros: {
        rossensors: {
            label: 'ROS-Sensors',
            children: {
                cameraRos: { label: 'CameraROS', file: 'ROSCamera.json' },
                odometer: { label: 'Odometer', file: 'ROS-Odometer.json' },
                imu: { label: 'IMU', file: 'ROS-IMU.json' },
                laserRos: { label: 'LaserROS', file: 'ROSLaser.json' }
            }
        }
    },
    ros2: {
        ros2sensors: {
            label: 'ROS2-Sensors',
            children: {
                cameraRos2: { label: 'CameraROS2', file: 'ROS2Camera.json' },
                laserRos2: { label: 'LaserROS2', file: 'ROS2Laser.json' }
            }
        },
        ros2sub: {
            label: 'ROS2-Subscribers',
            children: {
                cameraRos2: { label: 'CameraROS2', file: 'ROS2Camera.json' },
                laserRos2: { label: 'LaserROS2', file: 'ROS2Laser.json' }
            }
        },
        ros2pub: {
            label: 'ROS2-Publishers',
            children: {
                cameraRos2: { label: 'CameraROS2', file: 'ROS2Camera.json' },
                laserRos2: { label: 'LaserROS2', file: 'ROS2Laser.json' }
            }
        },
    },
    drivers: {
        control: {
            label: 'Control',
            children: {
                motorDriver: { label: 'MotorDriver', file: 'MotorDriver.json' },
                motorDriverRos2: { label: 'MotorDriverROS2', file: 'MotorDriverROS2.json' },
                teleoperator: { label: 'Teleoperator', file: 'Teleoperator.json' }
            }
        },
        opencv: {
            label: 'OpenCV',
            children: {
                camera: { label: 'Camera', file: 'Camera.json' },
                imageRead: { label: 'Image Read', file: 'ImageRead.json' },
                h264streamer: { label: 'H264 Streamer', file: 'H264Streamer.json' },
                screen: { label: 'Screen', file: 'Screen.json' },
                videoStreamer: { label: 'Video Streamer', file: 'VideoStreamer.json' }
            }
        },

    },
    industrial: {
        communication: {
            label: 'Communication',
            children: {
                modbusRead: { label: 'ModBusRead', file: 'ModbusRead.json' },
                modbusWrite: { label: 'ModBusWrite', file: 'ModbusWrite.json' },
                canbusRead: { label: 'CANBusRead', file: 'CANBusRead.json' },
                canbusWrite: { label: 'CANBusWrite', file: 'CANBusWrite.json' },
                snap7Read: { label: 'Snap7Read', file: 'Snap7Read.json' },
                snap7Write: { label: 'Snap7Write', file: 'Snap7Write.json' }
            },
        },
        raspberrypi: {
            label: 'RaspberryPi',
            children: {
                rpiDigitalRead: { label: 'DigitalRead', file: 'RPiDigitalRead.json' },
                rpiDigitalWrite: { label: 'DigitalWrite', file: 'RPiDigitalWrite.json' },
                rpiAnalogRead: { label: 'AnalogRead', file: 'RPiAnalogRead.json' },
                rpiAnalogWrite: { label: 'AnalogWrite', file: 'RPiAnalogWrite.json' },
            }
        }

    }
};