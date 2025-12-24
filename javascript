// Contoh kode untuk Dream OS Kai frontend
const SUPABASE_URL = "https://mugrsslvjaisdcexbybg.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

// 1. GET FACILITIES
async function getFacilities() {
  const { data, error } = await supabase
    .from('dream_kai_facilities')
    .select('*')
    .eq('status', 'available')
  
  return data // untuk dropdown select
}

// 2. CREATE BOOKING
async function createBooking(data) {
  const { data: booking, error } = await supabase
    .from('dream_kai_bookings')
    .insert([{
      nama_pemesan: data.nama,
      email: data.email,
      no_hp: data.phone,
      facility_id: data.facilityId,
      tanggal: data.date,
      jam_mulai: data.startTime,
      jam_selesai: data.endTime,
      tujuan: data.purpose,
      jumlah_orang: data.people,
      status: 'pending'
    }])
    .select()
  
  return booking
}

// 3. GET TODAY'S BOOKINGS
async function getTodayBookings() {
  const today = new Date().toISOString().split('T')[0]
  
  const { data, error } = await supabase
    .from('dream_kai_bookings')
    .select(`
      *,
      dream_kai_facilities (*)
    `)
    .eq('tanggal', today)
    .order('jam_mulai', { ascending: true })
  
  return data
}
