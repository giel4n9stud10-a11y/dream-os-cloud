
import React from 'react';
import { ArrowLeft, Download, FileJson, FileSpreadsheet } from 'lucide-react';
import { Booking, K3Report } from '../types';

interface Props {
  bookings: Booking[];
  reports: K3Report[];
  onBack: () => void;
}

const BackupSystem: React.FC<Props> = ({ bookings, reports, onBack }) => {
  const exportJSON = () => {
    const data = {
      version: '3.1',
      exportedAt: new Date().toISOString(),
      bookings,
      reports
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dream-os-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const exportCSV = () => {
    if (bookings.length === 0) return alert("No bookings to export");
    const headers = 'Nama,Divisi,WhatsApp,Sarana,Tanggal,Mulai,Selesai,Keterangan\n';
    const rows = bookings.map(b => `"${b.nama}","${b.divisi}","${b.whatsapp}","${b.sarana}","${b.tanggal}","${b.waktuMulai}","${b.waktuSelesai}","${b.keterangan}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-export.csv`;
    a.click();
  };

  return (
    <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-full text-yellow-500">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-white">Backup & Export</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 text-center hover:border-yellow-500 transition-colors cursor-pointer" onClick={exportJSON}>
          <FileJson size={64} className="mx-auto text-purple-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-2">Export to JSON</h3>
          <p className="text-slate-500 text-sm">Full data backup including K3 reports and bookings.</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 text-center hover:border-yellow-500 transition-colors cursor-pointer" onClick={exportCSV}>
          <FileSpreadsheet size={64} className="mx-auto text-green-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-2">Export Bookings to CSV</h3>
          <p className="text-slate-500 text-sm">Spreadsheet compatible format for Excel/Google Sheets.</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl text-slate-400 text-xs">
        <p>• Data is stored locally in your browser cache.</p>
        <p>• Clearing browser data will delete these records unless backed up.</p>
        <p>• Recommended backup frequency: Weekly.</p>
      </div>
    </div>
  );
};

export default BackupSystem;
