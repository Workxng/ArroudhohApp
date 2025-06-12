import React from 'react';
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define Video interface for TypeScript
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: any;
  url: string;
}

// Dummy data for videos
const videos: Video[] = [
  {
    id: '1',
    title: 'Profil Sekolahku | SMP Plus Arroudhoh',
    description:
      'SMP PLUS ARROUDHOH , Full Day School yang mengadaptasi kurikulum ala pesantren.  Kami siap membantu setiap siswa mengembangkan potensi terbaiknya melalui pembelajaran yang seimbang antara ilmu pengetahuan umum dan ilmu agama Mari menjadi bagian dari keluarga besar SMP Plus Ar-Roudhoh, tempat di mana ilmu, adab, dan prestasi berpadu dalam harmoni!',
    thumbnail: require('../../assets/images/pict/thumbnail.png'),
    url: 'hthttps://youtu.be/5QtjF6SFu',
  },
];

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  const openVideo = () => {
    Linking.openURL(video.url);
  };

  return (
    <TouchableOpacity style={styles.videoCard} onPress={openVideo}>
      <Image source={video.thumbnail} style={styles.videoThumbnail} />
      <Text style={styles.videoTitle}>{video.title}</Text>
      <Text style={styles.videoDescription}>{video.description}</Text>
    </TouchableOpacity>
  );
};

const SMPPlusArroudhohHomepage = () => {
  function openYouTube() {
    Linking.openURL('hthttps://youtu.be/5QtjF6SFuxA'); 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Contact */}
      <View style={styles.topContact}>
        <Text style={styles.topContactText}>arroudhoh.smp@gmail.com | (031) 8673171</Text>
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>SMP Plus Arroudhoh</Text>
        {/* Add navigation buttons or drawer here */}
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
         <Image source={require('../../assets/images/pict/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeTitle}>SELAMAT DATANG</Text>
        <Text style={styles.welcomeSubtitle}>DI SMP PLUS ARROUDHOH</Text>
      </View>

      {/* Quote Section */}
      <View style={styles.quoteSection}>
        <Text style={styles.quoteText}>
          “Mendidik dengan hati, membentuk generasi yang berakhlak dan berilmu”
        </Text>
      </View>

      {/* Why Choose Us Section */}
      <View style={styles.whyChooseUsSection}>
        <Text style={styles.sectionTitle}>Kenapa harus Sparodhoti?</Text>
        <Text style={styles.sectionSubtitle}>
          Alasan mengapa SMP Plus Arroudhoh menjadi pilihan
        </Text>
        <View style={styles.reasonsContainer}>
          <View style={styles.reasonBox}>
            <Image source={require('../../assets/images/pict/masjid.jpg')} style={styles.reasonIcon} />
            <Text style={styles.reasonTitle}>Pendidikan Berbasis Pesantren</Text>
            <Text style={styles.reasonText}>
              Menggabungkan kurikulum nasional dengan nilai-nilai keislaman, membentuk siswa yang cerdas secara akademik dan kuat secara spiritual.
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Image source={require('../../assets/images/pict/bintang.jpg')} style={styles.reasonIcon} />
            <Text style={styles.reasonTitle}>Fokus pada Adab dan Ibadah</Text>
            <Text style={styles.reasonText}>
              Mengutamakan pembinaan karakter dan akhlakul karimah sebagai dasar utama dalam setiap proses pembelajaran.
            </Text>
          </View>
          <View style={styles.reasonBox}>
            <Image source={require('../../assets/images/pict/buku.jpg')} style={styles.reasonIcon} />
            <Text style={styles.reasonTitle}>Lingkungan Islami dan Disiplin</Text>
            <Text style={styles.reasonText}>
              Suasana sekolah yang religius dan tertib mendukung tumbuhnya kedisiplinan, tanggung jawab, dan kemandirian siswa.
            </Text>
          </View>
        </View>
      </View>

      {/* Principal Message Section */}
      <View style={styles.principalMessageSection}>
        <Text style={styles.sectionTitle}>Sambutan Kepala Sekolah</Text>
        <View style={styles.greetingContainer}>
          <Image source={require('../../assets/images/pict/kpl.jpg')} style={styles.headImage} />
          <Text style={styles.greetingText}>
            Selamat datang di SMP Plus Ar-Roudhoh, Full Day School yang mengadaptasi kurikulum ala pesantren. Seorang ulama besar, Imam Malik,
             pernah berkata: "Pelajarilah adab sebelum mempelajari suatu ilmu." Seperti yang kita ketahui, perbedaan mendasar antara manusia dan binatang 
             adalah akal atau ilmu. Namun, ada tingkatan yang lebih tinggi dari ilmu, yaitu adab atau akhlak. Orang yang 
             beradab sudah pasti berilmu, tetapi orang yang berilmu belum tentu beradab. Oleh karena itu, di SMP Plus Ar-Roudhoh, 
             kami tidak hanya berfokus pada prestasi akademik, tetapi juga menanamkan nilai-nilai akhlakul karimah dalam setiap aspek pendidikan.
             Kami yakin bahwa ketika akhlak seseorang sudah baik, InsyaAllah, prestasi akan mengikuti dengan sendirinya. 
             Dengan sistem pendidikan berbasis pesantren, kami berkomitmen mencetak generasi yang berilmu,
             beradab, dan siap menghadapi tantangan masa depan dengan bekal iman dan taqwa. Bergabunglah bersama kami di SMP Plus Arroudhoh!
          </Text>
          <Text style={styles.kplContainer}>M. FATKHUR ROHMAN, S.E</Text>
        </View>
      </View>

      {/* Video Section */}
      <View style={styles.videoSection}>
        <Text style={styles.sectionTitle}>Profil SMP Plus Arroudhoh</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.videoScroll}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} SMP Plus Arroudhoh. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#F5F5F5',
  },
  topContact: {
    backgroundColor: '#2F855A',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  topContactText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  navbar: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F855A',
  },
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F855A',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#2F855A',
  },
  quoteSection: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#2F855A',
    textAlign: 'center',
  },
  whyChooseUsSection: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F855A',
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  reasonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reasonBox: {
    width: '30%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  reasonIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  reasonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2F855A',
    marginBottom: 6,
    textAlign: 'center',
  },
  reasonText: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
  principalMessageSection: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    kplContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headImage: {
    width: 100,
    height: 120,
    borderRadius: 12,
    marginRight: 16,
  },
  greetingText: {
    flex: 1,
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'justify',
  },
videoSection: {
  paddingHorizontal: 16,   
  paddingTop: 10,          
  marginBottom: 30,        
},
  videoScroll: {
    paddingVertical: 10,
  },
videoCard: {
  width: Dimensions.get('window').width * 0.7,
  alignSelf: 'center',
  marginRight: 12,
  backgroundColor: 'white',
  borderRadius: 16,
  padding: 16,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
  position: 'relative'
},
videoThumbnail: {
  width: '100%',
  height: 300,
  borderRadius: 12,
  marginBottom: 10,
},
videoTitle: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#2F855A',
  textAlign: 'center',
  marginBottom: 6,
},
videoDescription: {
  fontSize: 11,
  color: '#4A5568',
  textAlign: 'center',
},


  footer: {
    backgroundColor: '#2F855A',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default SMPPlusArroudhohHomepage;
