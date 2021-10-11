<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent :globalHeaderData="globalHeaderData" />
    </section>
    <section class="abionic-section" id="abionic">
      <abionicComponent/>
    </section>
    <section class="product-section" id="product">
      <productComponent/>
    </section>
    <section class="table-section" id="table1">
      <h2 class="headArtical">OUR CLINICAL APPLICATIONS:</h2>
      <tableComponent :tableData="table1"/>
    </section>
    <section class="table-section" id="table2">
      <tableComponent :tableData="table2"/>
    </section>
    <section class="table-section" id="table3">
      <tableComponent :tableData="table3"/>
    </section>
    <section class="table-section" id="table4">
      <tableComponent :tableData="table4"/>
    </section>
    <section class="table-section" id="table5">
      <tableComponent :tableData="table5"/>
    </section>
    <section class="table-section" id="table6">
      <tableComponent :tableData="table6"/>
    </section>
    <section class="table-section" id="table7">
      <tableComponent :tableData="table7"/>
    </section>
    <section class="table-section" id="table8">
      <tableComponent :tableData="table8"/>
    </section>
    <section class="kits-section" id="kits">
      <kitsComponent />
    </section>
  </div>
</template>

<script>
import headerComponent from '../../components/globalComponents/global-header.vue'
import abionicComponent from '../../components/companies/abionic/abionic.vue'
import productComponent from '../../components/companies/abionic/product.vue'
import tableComponent from '../../components/companies/abionic/table.vue'
import kitsComponent from '../../components/companies/abionic/kits.vue'

export default {
  components: {
    headerComponent,
    abionicComponent,
    productComponent,
    tableComponent,
    kitsComponent
    },
    data() {
        return {
          globalHeaderData:{
            header: 'Abionic',
            pageName: 'Importation and Distribution'
          },
          table1: {
            tableName: '1- immunology & endocrinology',
            backgroundColor: 'pink',
            tableData: [
              [
              [
                'Immunoglobulin E (IgE) (total and specific)',
                'Tryptase',
                'Thyroid panel (thyroid stimulating hormone (TSH), free/total T3/T4)',
                'Neonatal thyroid panel (TSH, Thyroxin)',
                'Human chorionic gonadotropin (hCG)',
                'Placental growth factor'
              ],
              [
                'Allergic asthma, allergic rhinitis, risk of severe allergic reaction',
                'Anaphylactic shock',
                'Thyroid storm, hyperthyroidism',
                'Thyroid storm, hyperthyroidism',
                'Pregnancy',
                'Pre-eclampsia'
              ],
              [
                'Immunoassay'
              ],
              [
                '5-10 minutes'
              ],
              ]
            ],
          },
          table2: {
            tableName: '2- Traumatic brain injuiry',
            backgroundColor: 'black',
            color: 'white',
            tableData: [
              [
              [
                'Undisclosed marker'
              ],
              [
                'Traumatic brain injury'
              ],
              [
                'Immunoassay'
              ],
              [
                '5–8 minutes'
              ],
              ]
            ],
          },
          table3: {
            tableName: '3- haematology',
            backgroundColor: 'red',
            color: 'white',
            tableData: [
              [
                [
                  'Ferritin'
                ],
                [
                  'Anemia (iron-deficiency anemia)'
                ],
                [
                  'Immunoassay'
                ],
                [
                  '5 minutes'
                ],
              ],
              [
                [
                  'Hemoglobin'
                ],
                [
                  'Anemia'
                ],
                [
                  'Immunoassay'
                ],
                [
                  '1 minutes'
                ],
              ],
              [
                [
                  'Erythrocyte',
                  'White blood cells',
                  'Neutrophils',
                  'Basophils',
                  'Eosinophils',
                  'Lymphocytes',
                  'Thrombocytes'
                ],
                [
                  'Anemia',
                  'Leukopenia (immunosuppression, immunocompromised), anemia, infection, leukemia',
                  'Neutropenia',
                  'Basophilia, basopenia',
                  'Eosinophilia',
                  'Lymphocytopenia, lymphocytosis',
                  'Thrombocytopenia, thrombocytosis and thrombocythemia'
                ],
                [
                  'Flow cytometry'
                ],
                [
                  '1 minutes'
                ],
              ]
            ],
          },
          table4: {
            tableName: '4- metabolism',
            backgroundColor: 'blue',
            color: 'white',
            tableData: [
              [
                [
                  'Glucose'
                ],
                [
                  'Hypo and hyperglycemia'
                ],
                [
                  'Electrochemistry'
                ],
                [
                  '1 minutes'
                ],
              ],
              [
                [
                  'Glycated hemoglobin (HbA1c)'
                ],
                [
                  'Diabetes (diagnosis and monitoring)'
                ],
                [
                  'Boronate chromatography'
                ],
                [
                  '3 minutes'
                ],
              ],
            ],
          },
          table5: {
            tableName: '5- cardiovascular disease',
            backgroundColor: 'yellow',
            tableData: [
              [
                [
                  'D-Dimer',
                  'Cardiac troponin I (cTnI)',
                  'Pro B-type natriuretic peptide (ProBNP)',
                  'Creatinine kinase - muscle/brain (CK-MB)',
                  'High sensitive C-reactive protein (hsCRP)'
                ],
                [
                  'Venous thromboembolic diseases',
                  'Myocardial infarction',
                  'Heart failure (prognosis)',
                  'Acute myocardial infarction',
                  'Risk of cardiovascular disease'
                ],
                [
                  'Immunoassay'
                ],
                [
                  '5 minutes'
                ],
              ],
            ],
          },
          table6: {
            tableName: '6- Therapeutic drug monitoring',
            backgroundColor: 'gray',
            color: 'white',
            tableData: [
              [
                [
                  'Anti-TNFα',
                  'Antiepileptics (carbamazepine, phenobarbital, valproic acid)',
                  ' Antiarrhythmics (digitoxin, digoxin, lidocaine)',
                  'Antibiotics (vancomycin)',
                  'Bronchodilators (theophylline)',
                  'Immunosuppressants (cyclosporine, tacrolimus)'
                ],
                [
                  'Inflammatory bowel disease',
                  'Correction of abnormal neuronal discharge in the central nervous system',
                  'Correction of cardiac abnormalities (tachycardia, bradycardia)',
                  'Vancomycin-sensitive bacterial infection',
                  'Chronic asthma',
                  'Organ transplant, cancers'
                ],
                [
                  'Immunoassay'
                ],
                [
                  '5 minutes'
                ],
              ],
            ],
          },
          table7: {
            tableName: '7- critical care',
            backgroundColor: 'blueLight',
            color: 'white',
            tableData: [
              [
                [
                  'Undisclosed biomarker',
                  'Alkaline phosphatase (ALP), aspartate aminotransferase (AST), alanine aminotransferase (ALT)',
                  'Albumin',
                ],
                [
                  'Acute kidney injury',
                  'Liver function / liver injury',
                  'Hypoalbuminemia',
                ],
                [
                  'Immunoassay'
                ],
                [
                  '5-8 minutes'
                ],
              ],
              [
                [
                  'pH',
                  'pCO2, pO2, sO2',
                  'K+, Na+, Ca2+, Cl-',
                  'Lactate'
                ],
                [
                  'Acid-base imbalance',
                  'Electrolyte imbalance',
                  'Electrolyte imbalance',
                  'Hypoxia'
                ],
                [
                  'Electrochemistry'
                ],
                [
                  '1 minutes'
                ],
              ],
              [
                [
                  'Urea',
                  'Creatinine',
                ],
                [
                  'Kidney function',
                  'Kidney function',
                ],
                [
                  'Enzymatic reaction'
                ],
                [
                  '5 minutes'
                ],
              ]
            ],
          },
          table8: {
            tableName: '8- sepsis & infectious disease:',
            backgroundColor: 'blueLight',
            color: 'white',
            p1: 'We are committed to providing critical and primary care physicians with fast and reliable results at the point of care with the highest test efficiency and medical value.',
            p2: 'Currently commercialized tests on the abioSCOPE® platform are the pancreatic stone protein (PSP) sepsis test, allergy panel test and Ferritin iron deficiency test.',
            p3: 'To complete our acute care panel solution, the CRP infection/inflammation test and D-Dimer thrombosis tests are under development and will be launched soon.',
            tableData: [
              [
                [
                  'Pancreatic stone protein (PSP)',
                  'C-reactive protein (CRP)',
                  'Procalcitonin (PCT)',
                  'C. difficile ToxA/B',
                  'Dengue virus NS1 and IgM',
                  'HIV'
                ],
                [
                  'Sepsis',
                  'Inflammation',
                  'Bacteremia',
                  'C. difficile infection',
                  'Dengue fever',
                  'AIDS'
                ],
                [
                  'Immunoassay'
                ],
                [
                  '5-8 minutes'
                ],
              ],
              [
                [
                  'Emerging virus panel',
                  'Influenza panel',
                  'Respiratory panel',
                  'Gastrointestinal (GI) panel',
                  'Sexually transmitted infection (STI) panel',
                  'Antimicrobial resistance panel'
                ],
                [
                  'Viral infection: Dengue, Zika, Ebola, SARS ...',
                  'Viral infection: Influenza A, B',
                  'Respiratory tract infection: Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae, Pseudomonas aeruginosa...',
                  'Gastrointestinal infection: Escherichia coli, Campylobacter (jejuni, coli, and upsaliensis), Clostridium difficile (toxin A/B), Salmonella...',
                  'Sexually transmitted infection: Chlamydia trachomatis (CT) and Neisseria gonorrhoeae (NG), Group B Streptococcus (GBS), Trichomonas vaginalis (TV)...',
                  'Antimicrobial resistance gene : ESBL (CTX-M), Carbapenemase (KPC), Methicillin Resistance (mecA/mecC) ...'
                ],
                [
                  'Molecular diagnosis'
                ],
                [
                  '30 minutes'
                ],
              ],
            ],
          },
        };
    }
}
</script>
