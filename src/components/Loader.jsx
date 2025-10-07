import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div
          className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        />
      </div>
    </Html>
  )
}

export default Loader
