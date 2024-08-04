import { useMemo, useRef } from 'react';
import * as THREE from 'three'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import {Box, Cone} from "@react-three/drei";


export default function Levitation(){ 


    return <>
        <Box>
            <meshStandardMaterial color="hotpink" />
        </Box>

        <Cone />

        
    </>
}
