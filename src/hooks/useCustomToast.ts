import { useToast } from "@/components/ui/use-toast"

export const useCustomToast = () => {
  const { toast } = useToast()
  return toast
}