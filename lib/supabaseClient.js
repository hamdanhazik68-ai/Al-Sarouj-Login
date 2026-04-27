import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkxazrrlzwyuewparari.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZWF6cnJsend5dWV3cGFyYXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMDE2ODksImV4cCI6MjA5MjY3NzY4OX0.HSAoaXm3pKW3clw4EJ5FGaqBfqg4H8aiocef28H_FUM'

export const supabase = createClient(supabaseUrl, supabaseKey)