import React from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const newsData = [
  {
    id: '1',
    title: 'Kelompok 5_SMP Plus Arroudhoh_5_Candi Tawangalung',
    summary: 'Sejarah Candi Tawangalun yang terletak di dukuh Kampung Baru, desa Buncitan, kec. Sedati, kab. Sidoarjo. Banyak cerita romantis yang terdapat di dalamnya. Candi Tawangalun merupakan salah satu peninggalan leluhur yang terbuat dari bahan dasar batu bata. Dahulunya Candi Tawangalun juga dikenal dengan nama Sumur Windu. Ingin tau cerita selanjutnya simak video berikut ini.',
    date: '28 Agu 2023',
    image: require('../assets/images/pictures/yt-candi.jpg'),
    youtubeUrl: 'https://youtu.be/8W0REQpGgWs?si=7Y4QOF5KgzqSOvPw', 
  },
  {
    id: '2',
    title: 'Kelompok 4_SMP Plus Arroudhoh_4_Menjaga Bumi Tanpa Sampah',
    summary: 'Menjaga lingkungan bukan hanya angan-angan, tapi tindakan. Pencemaran lingkungan adalah penyakit tak terobati,Itu hanya dapat dicegah. Menyelamatkan lingkungan hidup dimulai dari tindakan awalmu dengan membersihkan dan melestarikan. Keindahan alam adalah anugerah yang menumbuhkan penghargaan dan rasa syukur...',
    date: '29 Agu 2023',
    image: require('../assets/images/pictures/yt-lingkungan.jpg'),
    youtubeUrl: 'https://youtu.be/0pYhw8H0u4U?si=skGgwUKS75fM-rlc',
  }, 
   {
    id: '3',
    title: 'Kelompok 1_SMP Plus Arroudhoh_1_Wisata Rakyat Sedati',
    summary: 'Potensi wisata sidoarjo salah satunya ada di albatros yang terletak di sedati kab. Sidoarjo. Disini kita membuat vidio dengan konsep mereview apa saja wisata kuliner, wisata belanja, maupun wisata mainan...',
    date: '28 Agu 2023',
    image: require('../assets/images/pictures/yt-wisata.jpg'),
    youtubeUrl: 'https://youtu.be/v0DxSa26dMg?si=JFV_qVfUxNtuPiZx', 
  },  
  {
    id: '4',
    title: 'Kelompok 6_SMP Plus Arroudhoh_6_Perjuangan Seorang Murid',
    summary: 'Perjuangan seorang murid di masa sekarang bukanlah dengan mengangkat senjata dan berperang. Perjuangan yang tepat seorang pelajar saat ini adalah dengan belajar sungguh-sungguh dan berakhlak baik.',
    date: '28 Agu 2023',
    image: require('../assets/images/pictures/yt-perjuangan.jpg'),
    youtubeUrl: 'https://youtu.be/ijIAhjAu6Pg?si=L8nHHz5mXXSsvdmz',
  },  
  {
    id: '5',
    title: 'Kelompok 10_SMP Plus Arroudhoh_10_Tunjukkan Bakatmu',
    summary: 'Hobi dianggap sebagai aktivitas rutin yang dilakukan untuk kesenangan, biasanya pada waktu senggang. Hobi mencakup mengoleksi barang dan benda bertema, terlibat dalam aktivitas kreatif dan artistik, berolahraga, atau melakukan hiburan lainnya.',
    date: '28 Agu 2023',
    image: require('../assets/images/pictures/yt-bakat.jpg'),
    youtubeUrl: 'https://youtu.be/BvYHcYvje78?si=u-n25Siywi7H7QYf', 
  },
];

const Explore = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => {
      console.error("Failed to open URL:", err);
      alert("Failed to open the video");
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.newsCard}
      onPress={() => handlePress(item.youtubeUrl)}
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.newsImage} />
      <View style={styles.youtubeOverlay}>
        <Text style={styles.youtubeIcon}>▶</Text>
      </View>
      <View style={styles.newsContent}>
        <Text style={styles.newsDate}>{item.date}</Text>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsSummary}>{item.summary}</Text>
        <Text style={styles.youtubeLink}>Lihat di YouTube →</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Karya-Karya dari Murid Kami</Text>
      </View>

      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3c946c', // School color green
    padding: 25,
    height: 80,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 15,
  },
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  newsImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  newsContent: {
    padding: 15,
  },
  newsDate: {
    color: '#666',
    fontSize: 12,
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  newsSummary: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  youtubeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtubeIcon: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  youtubeLink: {
    color: '#FF0000', // YouTube red
    marginTop: 8,
    fontWeight: 'bold',
  },

});

export default Explore;