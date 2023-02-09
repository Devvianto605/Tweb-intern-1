import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BearState {
  token: string
}

const useBearStore = create<BearState>()(
    persist(
        () => ({
            token: '',
    }),
    {
        name: 'Tweb-intern-storage', 
    }
    )
)

export default useBearStore