
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
        }
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
        modbus: {
            label: 'Modbus',
            children: {
                modbusRead: { label: 'ModBusRead', file: 'ModbusRead.json' },
                modbusWrite: { label: 'ModBusWrite', file: 'ModbusWrite.json' }
            }
        },
        canbus: {
            label: 'CANBus',
            children: {
                canbusRead: { label: 'CANBusRead', file: 'CANBusRead.json' },
                canbusWrite: { label: 'CANBusWrite', file: 'CANBusWrite.json' }
            }
        },
        snap7: {
            label: 'Snap7',
            children: {
                snap7Read: { label: 'Snap7Read', file: 'Snap7Read.json' },
                snap7Write: { label: 'Snap7Write', file: 'Snap7Write.json' }
            }
        }
    }
};


/*
export const collectionBlocks: {
    'blocks': CollectionBlockType,
    'processing': CollectionBlockType,
    'drivers': CollectionBlockType
} = {
    'blocks': {
        'control': {
            'label': 'Control',
            'children': {
                'motorDriver': { 'label': 'MotorDriver' },
                'pid': { 'label': 'PID' },
                'teleoperator': { 'label': 'Teleoperator' }
            }
        },
        'opencv': {
            'label': 'OpenCV',
            'children': {
                'blur': { 'label': 'Blur' },
                'camera': { 'label': 'Camera' },
                'colorFilter': { 'label': 'Color Filter' },
                'contourDetector': { 'label': 'Contour Detector' },
                'cropper': { 'label': 'Cropper' },
                'dilation': { 'label': 'Dilation' },
                'edgeDetector': { 'label': 'Edge Detector' },
                'erosion': { 'label': 'Erosion' },
                'faceDetector': { 'label': 'Face Detector' },
                'imageRead': { 'label': 'Image Read' },
                'screen': { 'label': 'Screen' },
                'threshold': { 'label': 'Threshold' },
                'videoStreamer': { 'label': 'Video Streamer' }
            }
        },
        'rossensors': {
            'label': 'ROS-Sensors',
            'children': {
                'cameraRos': { 'label': 'CameraROS' },
                'odometer': { 'label': 'Odometer' },
                'imu': { 'label': 'IMU' }
            }
        },
        'tensorflow': {
            'label': 'TensorFlow',
            'children': {
                'objectDetector': { 'label': 'Object Detector' }
            }
        }
    },
    'processing': {
        'control': {
            'label': 'Control',
            'children': {
                'pid': { 'label': 'PID' },
            }
        },
        'opencv': {
            'label': 'OpenCV',
            'children': {
                'blur': { 'label': 'Blur' },
                'colorFilter': { 'label': 'Color Filter' },
                'contourDetector': { 'label': 'Contour Detector' },
                'cropper': { 'label': 'Cropper' },
                'dilation': { 'label': 'Dilation' },
                'edgeDetector': { 'label': 'Edge Detector' },
                'erosion': { 'label': 'Erosion' },
                'faceDetector': { 'label': 'Face Detector' },
                'threshold': { 'label': 'Threshold' },
            }
        },
        'tensorflow': {
            'label': 'TensorFlow',
            'children': {
                'objectDetector': { 'label': 'Object Detector' }
            }
        }
    },
    'drivers': {
        'control': {
            'label': 'Control',
            'children': {
                'motorDriver': { 'label': 'MotorDriver' },
                'motorDriverRos2': { 'label': 'MotorDriverROS2' },
                'teleoperator': { 'label': 'Teleoperator' }
            }
        },
        'opencv': {
            'label': 'OpenCV',
            'children': {
                'camera': { 'label': 'Camera' },
                'imageRead': { 'label': 'Image Read' },
                'screen': { 'label': 'Screen' },
                'videoStreamer': { 'label': 'Video Streamer' }
            }
        },
        'rossensors': {
            'label': 'ROS-Sensors',
            'children': {
                'cameraRos': { 'label': 'CameraROS' },
                'odometer': { 'label': 'Odometer' },
                'imu': { 'label': 'IMU' },
                'laserRos': { 'label': 'LaserROS' }
            }
        },
        'ros2sensors': {
            'label': 'ROS2-Sensors',
            'children': {
                'cameraRos2': { 'label': 'CameraROS2' },
                'laserRos2': { 'label': 'LaserROS2' },
            }
        }
    }
}
*/

// This function is used to get the block data from the collectionBlocks object but Removed for now
/*
export function getCollectionBlock(name: string) {

    switch (name) {
        case 'drivers.control.motorDriver':
            return import('./control/MotorDriver.json');
        case 'drivers.control.motorDriverRos2':
            return import('./control/MotorDriverROS2.json');
        case 'processing.control.pid':
            return import('./control/PID.json');
        case 'drivers.control.teleoperator':
            return import('./control/Teleoperator.json');
        case 'processing.opencv.blur':
            return import('./opencv/Blur.json');
        case 'drivers.opencv.camera':
            return import('./opencv/Camera.json');
        case 'processing.opencv.colorFilter':
            return import('./opencv/ColorFilter.json');
        case 'processing.opencv.contourDetector':
            return import('./opencv/ContourDetector.json');
        case 'processing.opencv.cropper':
            return import('./opencv/Cropper.json');
        case 'processing.opencv.dilation':
            return import('./opencv/Dilation.json');
        case 'processing.opencv.edgeDetector':
            return import('./opencv/EdgeDetector.json');
        case 'processing.opencv.erosion':
            return import('./opencv/Erosion.json');
        case 'processing.opencv.faceDetector':
            return import('./opencv/FaceDetector.json');
        case 'drivers.opencv.imageRead':
            return import('./opencv/ImageRead.json');
        case 'drivers.opencv.screen':
            return import('./opencv/Screen.json');
        case 'processing.opencv.threshold':
            return import('./opencv/Threshold.json');
        case 'drivers.opencv.videoStreamer':
            return import('./opencv/VideoStreamer.json');
        case 'drivers.rossensors.cameraRos':
            return import('./ros-sensors/ROSCamera.json');
        case 'drivers.rossensors.odometer':
            return import('./ros-sensors/Odometer.json');
        case 'drivers.rossensors.imu':
            return import('./ros-sensors/IMU.json');
        case 'drivers.rossensors.laserRos':
            return import('./ros-sensors/ROSLaserScan.json');
        case 'drivers.ros2sensors.cameraRos2':
            return import('./ros-sensors/ROS2Camera.json');
        case 'drivers.ros2sensors.laserRos2':
            return import('./ros-sensors/ROS2LaserScan.json');
        case 'processing.tensorflow.objectDetector':
            return import('./tensorflow/ObjectDetector.json');
        default:
            break;
    }
}
*/