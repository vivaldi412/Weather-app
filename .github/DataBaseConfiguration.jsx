
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzcxbqqlcnknhdkzxkmm.supabase.co'
const supabaseKey = ${{ secrets.SUPA_BASE_KEY }}
export const supabase = createClient(supabaseUrl, supabaseKey)
